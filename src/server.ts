import { app } from "./app";

app.listen(process.env.PORT, () => {
  console.info('[SERVER] -> Running')
})