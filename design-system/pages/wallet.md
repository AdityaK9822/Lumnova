# Wallet Page Overrides

> **PROJECT:** Lumnova Stellar Wallet
> **Generated:** 2026-08-06
> **Page Type:** Fintech Wallet Interface

> ������ **IMPORTANT:** Rules in this file **override** the Master file (`design-system/MASTER.md`).
> Only deviations from the Master are documented here. For all other rules, refer to the Master.

---

## Page-Specific Rules

### Layout Overrides
- **Max Width:** 600px (optimized for wallet interface focus)
- **Layout:** Centered card-based layout with vertical stacking
- **Content Density:** Medium — balance between information density and readability

### Spacing Overrides
- **Section Spacing:** 24px (slightly reduced for compact wallet interface)
- **Card Padding:** 20px (optimized for touch targets on mobile)
- **Element Gap:** 16px (consistent touch-friendly spacing)

### Typography Overrides
- **Heading Size:** Slightly larger on mobile for better readability
- **Number Font:** Increased weight for balance and transaction amounts
- **Label Size:** Slightly smaller for de-emphasis on static labels

### Color Overrides
- **Success Accent:** #10b981 (Emerald) for transaction success
- **Error Accent:** #ef4444 (Red) for transaction failures
- **Warning Accent:** #f59e0b (Amber) for network warnings
- **Background:** Slightly darker in dark mode for better neumorphism contrast

### Component Overrides
- **Button Height:** 56px minimum for touch targets (44px minimum + 12px buffer)
- **Input Height:** 52px minimum for touch targets
- **Card Border Radius:** 20px (consistent softness throughout)
- **Shadow Intensity:** Increased slightly for better depth perception

## Page-Specific Components

- **Wallet Address Display:** Truncated with full copy-on-tap functionality
- **Balance Display:** Large, monospace font for easy reading
- **Network Status Indicator:** Visual warning system for testnet/mainnet
- **Transaction Form:** Input with currency icon prefix and validation
- **Action Buttons:** Primary/secondary distinction with clear visual hierarchy

## Recommendations

- Consider adding biometric authentication for mobile wallet access
- Implement transaction history with infinite scroll for better performance
- Add QR code scanning for destination address input
- Consider implementing wallet connect standard for broader compatibility
- Add transaction confirmation with Face ID/Touch ID equivalent for security