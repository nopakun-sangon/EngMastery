#!/usr/bin/env bash

# EngMastery - Fetch & Update Daily Graded News
# Usage: 
#   ./update_news.sh               (Fetch all 4 categories)
#   ./update_news.sh tech          (Tech & DevOps)
#   ./update_news.sh business      (World & Business)
#   ./update_news.sh life_science  (Daily Life & Science)
#   ./update_news.sh sport         (Manchester United & Sports)

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR" || exit 1

CATEGORY="${1:-}"

echo "📰 EngMastery: Starting news update..."
if [ -n "$CATEGORY" ]; then
    python3 "$DIR/scripts/fetch_news.py" "$CATEGORY"
else
    python3 "$DIR/scripts/fetch_news.py"
fi

if [ $? -eq 0 ]; then
    echo "🎉 News update completed successfully!"
    echo "💡 Open http://localhost:3000 to read the latest news in Reading Lab!"
else
    echo "❌ News update encountered an error."
    exit 1
fi
