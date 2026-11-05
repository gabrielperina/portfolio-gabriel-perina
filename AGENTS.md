<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the portfolio as a static, typed TanStack Start site with content in `src/data` and semantic styles in `src/styles.css`; this preserves easy project additions and consistent routes.
- Use a dark-first, localStorage-persisted theme and CSS/IntersectionObserver motion; this avoids hydration flicker and keeps animations lightweight.
- Keep education and certification topics in typed `src/data` content, and gate scroll reveals behind client enhancement; this avoids invented credentials and keeps content visible without JavaScript.
