#!/bin/bash
# Script to generate notebooklm folder with consolidated markdown files
# Each subdirectory becomes its own .md file, named with "--" separating path components.
# Run from the project root: ./generate_notebooklm.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
DOCS_DIR="$SCRIPT_DIR/docs"
OUTPUT_DIR="$SCRIPT_DIR/notebooklm"

# Files to treat individually (copied as-is, excluded from consolidation)
SKIP_FILES=("function-jss.md" "function-jss-ee.md")

# Top-level directories to process
TOP_DIRS=("api" "api-mobile" "knowledge-base" "user-guide")

# Clean and create output directory
rm -rf "$OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR"

echo "Generating notebooklm files..."

# 1. Copy individual files as-is
for skip_file in "${SKIP_FILES[@]}"; do
  echo "  -> $skip_file (individual)"
  cp "$DOCS_DIR/api/$skip_file" "$OUTPUT_DIR/$skip_file"
done

# 2. For each top-level directory, find all subdirectories (including itself)
#    and create one consolidated .md per directory containing its direct .md files.
for top_dir in "${TOP_DIRS[@]}"; do
  top_path="$DOCS_DIR/$top_dir"
  [ -d "$top_path" ] || continue

  # Find all directories (including the top-level one)
  find "$top_path" -type d | sort | while read -r dir; do
    # Compute relative path from DOCS_DIR (e.g. "api/server-side-javascript-api")
    rel_path="${dir#$DOCS_DIR/}"

    # Build output filename: replace "/" with "--" (e.g. "api--server-side-javascript-api.md")
    output_name="$(echo "$rel_path" | tr '/' '--').md"

    # Collect .md files directly in this directory (not recursive, depth 1)
    md_files=()
    while IFS= read -r -d '' f; do
      basename_f="$(basename "$f")"
      # Skip individually-treated files (only relevant for api/ top-level)
      skip=false
      if [ "$rel_path" = "api" ]; then
        for skip_file in "${SKIP_FILES[@]}"; do
          if [ "$basename_f" = "$skip_file" ]; then
            skip=true
            break
          fi
        done
      fi
      [ "$skip" = true ] && continue
      md_files+=("$f")
    done < <(find "$dir" -maxdepth 1 -name '*.md' -type f -print0 | sort -z)

    # Skip if no .md files in this directory
    [ ${#md_files[@]} -eq 0 ] && continue

    echo "  -> $output_name"
    > "$OUTPUT_DIR/$output_name"
    for file in "${md_files[@]}"; do
      echo "" >> "$OUTPUT_DIR/$output_name"
      echo "<!-- source: ${file#$DOCS_DIR/} -->" >> "$OUTPUT_DIR/$output_name"
      echo "" >> "$OUTPUT_DIR/$output_name"
      cat "$file" >> "$OUTPUT_DIR/$output_name"
      echo "" >> "$OUTPUT_DIR/$output_name"
    done
  done
done

echo ""
echo "Done! Files generated in $OUTPUT_DIR:"
ls -lh "$OUTPUT_DIR"
