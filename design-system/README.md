# Lumnova Stellar Wallet Design System

This folder contains the design system for the Lumnova Stellar Wallet application, following the Master + Overrides pattern from UI/UX Pro Max.

## Structure

- `MASTER.md` — Global Source of Truth with all design rules
- `pages/` — Folder for page-specific overrides
  - `wallet.md` — Wallet interface-specific deviations from Master

## How It Works

1. When building any page, first check `design-system/pages/[page-name].md`
2. If the page file exists, its rules **override** the Master file
3. If not, strictly follow the rules in `design-system/MASTER.md`

## Current Overrides

- **Wallet Page** (`wallet.md`): Optimized for fintech wallet interface with touch-friendly controls, enhanced visibility for financial data, and specialized color usage for transaction states.

## Usage

When developing new features:
1. Check if a page-specific override exists for your page
2. Apply overrides from that file first
3. Fall back to Master design system for all other guidelines
4. Always reference the Pre-Delivery Checklist in MASTER.md before submitting code

## Design Theme

**Neumorphism + Accessible & Ethical** - Soft shadows, depth through subtle gradients, minimal color palette with excellent accessibility compliance.