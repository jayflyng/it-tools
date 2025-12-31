export default {
  async fetch(request, env) {
    // 优先返回静态资源
    const asset = await env.ASSETS.fetch(request);
    if (asset.status !== 404) return asset;
    // 自定义Worker逻辑
    return new Response("Vue + Workers 结合部署成功！");
  },
};
