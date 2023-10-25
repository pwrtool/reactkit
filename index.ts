import powertool from "@pwrtool/kit";

powertool([
  {
    name: "default",
    function: async (IO, _, Config) => {
      const foo = Config.get("foo");
      IO.out(foo);
    },
  },
]);
