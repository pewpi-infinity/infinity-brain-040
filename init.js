load('api_rpc.js');
load('api_shadow.js');

RPC.addHandler('Reveal', function() {
  print('Node 040 activates: gets Bible verses (try 4:50 but it's probably pretty limited)');
  return {phase: 1.1321};
});

print('Mongoose OS Brain 040 online – hydrogen valve ready');
