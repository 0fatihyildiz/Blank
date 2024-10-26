find . -type d \( -name "dist" -o -name "node_modules" \) -exec rm -rf {} +
echo "Cleaned up dist and node_modules directories 🚀"