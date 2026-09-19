# Mouse Finder

Search any MouseHunt mouse and see every location, cheese, and charm combination ranked by attraction rate, weighted by your own trap's Attraction bonus.

## Features

- Type-ahead search with multi-mouse selection (chips)
- Best-per-location ranking, aggregated across all selected mice or broken down per mouse
- Mouse group / subgroup shown for each mouse (e.g. "The Marching Flame » Archer")
- "Best only" toggle to collapse everything down to the top pick
- Attraction bonus slider to weight results by your own gear
- Dark mode, mobile-friendly layout
- Deep link to tsitu's CRE tool for each result

## Data sources

- Attraction population data and cheese baseline attraction rates: [tsitu's MH-Tools](https://tsitu.github.io/MH-Tools/)
- Mouse group / subgroup: crawled from [MHWiki](https://mhwiki.hitgrab.com) mouse infoboxes

Not affiliated with HitGrab or MouseHunt.

## Running locally

```
node server.js
```

Then open `http://localhost:8934`.
