requirejs.config({
  baseUrl: '/',
  paths: {
    jquery: 'node_modules/jquery/src/jquery',
    script:'js/script',
  },
  shim: {
    jquery: {
      exports: '$'
    },
  },
});
