module.exports = strapi => {
  return {
    initialize: function() {
      strapi.app.use(async (ctx, next) => {
        await next();

        // Set X-Response-Time header
        ctx.set("cache-control", "max-age=31557600");
      });
    }
  };
};
