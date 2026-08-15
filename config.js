// OpenFlow — client config.
//
// Both values below are meant to be public. The Supabase publishable key can
// only do what your row-level security policies allow, and the resolver
// function hands back an owner ID and nothing else.
//
// Your four provider keys never appear here. They live inside the Worker.

window.OPENFLOW = {
  // Your deployed Worker. Cloudflare shows this URL right after you hit
  // Deploy — it looks like https://openflow.<your-subdomain>.workers.dev
  api: "https://openflow.CHANGE-ME.workers.dev",

  supabaseUrl: "https://lellmqmqxkbiypwqbcej.supabase.co",
  supabaseKey: "sb_publishable_a6hALlGUrAM3GtbyO86cKw_fC5l71ah",
};
