import { time } from "console"

const delayResponse = async (timeOutCount: number): Promise<string> => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("you get value after " + timeOutCount.toString() + " milliseconds.")
    }, timeOutCount)
  })
}

export default async function MainComponent({ timeOutCount }: { timeOutCount: number }) {
  const message: string = await delayResponse(timeOutCount);
  console.log(message)
  return (<>
    <p>{message}</p>
  </>
  )
}