# Git Hooks Documentation

This project uses [Husky](https://typicode.github.io/husky/) to manage Git hooks and ensure code quality before commits and pushes.

## Installed Hooks

### Pre-commit Hook

Runs **before** each commit:

- ✅ Lints and formats staged files (via `lint-staged`)
- ✅ Runs TypeScript type checking on entire project
- ❌ Blocks commit if errors are found

### Pre-push Hook

Runs **before** each push:

- ✅ Runs full Next.js build
- ❌ Blocks push if build fails

## How It Works

1. When you run `git commit`, the pre-commit hook automatically:
   - Runs ESLint on staged `.js`, `.jsx`, `.ts`, `.tsx` files
   - Formats code with Prettier
   - Checks for TypeScript type errors

2. When you run `git push`, the pre-push hook automatically:
   - Runs `npm run build` to ensure production build works
   - Catches build errors before they reach the remote repository

## Skipping Hooks (Not Recommended)

If you need to skip hooks in emergency situations:

```bash
# Skip pre-commit hook
git commit --no-verify -m "your message"

# Skip pre-push hook
git push --no-verify
```

⚠️ **Warning**: Only skip hooks when absolutely necessary. They exist to maintain code quality.

## Dependencies

- `husky` - Git hooks manager
- `lint-staged` - Run linters on staged files
- `prettier` - Code formatter
- TypeScript - Type checking

## Manual Testing

Test the hooks manually:

```bash
# Test type checking
npx tsc --noEmit

# Test linting
npm run lint

# Test build
npm run build
```
