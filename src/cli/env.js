const parseEnv = () => {
  const matches = [];

  for (const key in process.env) {
    if (!key.startsWith('RSS_')) continue;
    matches.push(`${key}=${process.env[key]}`);
  }

  console.log(matches.join('; '));
};

parseEnv();
