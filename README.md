# Fraud Analysis Dashboard; Quarto Starter

This starter converts the original static `index.html` approach into a Quarto dashboard with five top navigation pages:

- Open Payments
- Suppliers
- Referring Providers
- Risk Signals
- AI Assistant

## What is included

- `index.qmd`; the Quarto dashboard document
- `_quarto.yml`; project configuration with output directed to `docs/`
- `styles/dashboard.css`; custom dark styling inspired by the original HTML page
- `scripts/chat.js`; embedded assistant logic that calls the backend endpoint
- `data/*.csv`; sample data for bar charts and pie charts
- `.github/workflows/publish.yml`; GitHub Actions workflow for rendering and publishing to GitHub Pages

## Local setup

Install Quarto and Python dependencies, then render the dashboard:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
quarto render
quarto publish gh-pages
```

The rendered site will be written to `docs/` because GitHub Pages can publish directly from that directory, and the included GitHub Action is set up to publish the rendered dashboard.

You can preview any local changes before pushing using:
```bash
quarto preview index.qmd
```

## Backend note

The AI Assistant page points to the same backend URL used in the original HTML version.

Update `scripts/chat.js` when the backend endpoint changes.

## Why the structure looks like this

Quarto dashboards support multiple pages through level 1 headings; those pages appear in the navigation bar. Quarto also supports card-based layouts, rows and columns, and custom CSS and published resources, which makes this structure a good fit for converting the original static HTML into a dashboard project.
