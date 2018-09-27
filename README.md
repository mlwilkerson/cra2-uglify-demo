This project was bootstrapped with [Create React App v2](https://github.com/facebookincubator/create-react-app).

It exercises a build scenario that would hit a known performance regression in `uglify-es` that's been fixed in [terser](https://github.com/terser-js/terser/issues/50).

One way to dodge this bullet in Webpack 4 is to use `terser` instead of `uglify-es`; whereas [the Webpack 5 roadmap](https://github.com/facebook/create-react-app/issues/4492#issuecomment-421959548) includes a shift to `terser`.

This demo shows that `create-react-app` is already using `terser-webpack-plugin`. So this little demo builds quickly, even on Webpack 4.

Usage:

`time yarn build`

Expected: quick build time

Actual:

> Done in 12.73s.

That's quick enough. If it were hitting the perf regression, it might take 5x as long.
