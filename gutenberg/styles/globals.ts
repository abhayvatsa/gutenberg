import css from 'styled-jsx/css'

export default css.global`
  :root {
    --header-height: 48px;
  }

  html,
  body {
    transition: all 0.5s ease 0s;
    background: rgba(var(--primary-background), 1);
    max-width: 850px; /* TODO: does this make sense, is this causing the chrome mobile bug */
    margin: 0 auto;
  }

  a {
    color: rgba(var(--highlight), 0.9);
  }

  main {
    /* TODO: this margin might belong elsewhere */
    margin: var(--theme-space-4);

    margin-top: var(--header-height);
  }

  h1,
  h2 {
    color: rgba(var(--primary-foreground), 1);
  }
  h2 {
    padding-bottom: 7px;
    border-bottom: 1px solid rgba(var(--primary-foreground), 0.5);
  }

  h3,
  h4,
  h5,
  h6 {
    color: rgba(var(--primary-foreground), 0.9);
  }

  * {
    color: rgba(var(--foreground-max-solid), 1);
  }

  /* TODO: comment this weirdness, pseudo for anchor tags */
  h2:before {
    display: block;
    content: ' ';
    height: calc(50px + 8px); /* Give height of your fixed element */
    margin-top: calc(
      (50px + 8px) * -1
    ); /* Give negative margin of your fixed element */
    visibility: hidden;
  }
`
