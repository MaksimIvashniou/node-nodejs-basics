const parseArgs = () => {
  const args = process.argv;
  const result = [];

  for (let i = 2; i < args.length; i++) {
    result.push(`${args[i]} is ${args[++i]}`);
  }

  console.log(result.join(', '));
};

parseArgs();
