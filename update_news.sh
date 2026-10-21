#!/usr/bin/env bash

# EngMastery - Fetch & Update Daily Graded News
# Usage: 
#   ./update_news.sh               (Fetch all 3 categories: DevOps, Tech, Business)
#   ./update_news.sh devops        (DevOps & Cloud Native: CNCF, Dev.to, Reddit)
#   ./update_news.sh tech          (Tech & AI Innovation: BBC Tech, TechCrunch)
#   ./update_news.sh business      (World & Business News: BBC Business & World)

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
    echo "💡 Open http://localhost:3000 and navigate to 'Daily News' menu to read the latest news!"
else
    echo "❌ News update encountered an error."
    exit 1
fi
