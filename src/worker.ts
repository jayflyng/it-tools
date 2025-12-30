export default {
  async fetch(request, env) {
    // 直接返回编译后的Vue静态资源
    return env.ASSETS.fetch(request);
  }
};
