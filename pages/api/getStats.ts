import { NextApiRequest, NextApiResponse } from "next";

function toCamelCase(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map((v) => toCamelCase(v));
  }

  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  return Object.keys(obj).reduce((newObj: any, key) => {
    const newKey = key.replace(/(_\w)/g, (match) => match[1].toUpperCase());
    newObj[newKey] = toCamelCase(obj[key]);
    return newObj;
  }, {});
}

const dummyData = {
  rpi3: { temperature: 33, usedMem: 1.4, totalMem: 4, cpuUsage: 2 },
  rpi1: { temperature: 37, usedMem: 1.6, totalMem: 4, cpuUsage: 9 },
  rpi2: { temperature: 37, usedMem: 1.4, totalMem: 4, cpuUsage: 3 },
  drive: { temperature: 49, usedMem: 0.6, totalMem: 4, cpuUsage: 41 },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let statsList =
    process.env.NODE_ENV === "development"
      ? dummyData
      : (
          await (
            await fetch(`${process.env.API_ENDPOINT!}:2784/getlist`)
          ).json()
        ).data;
  statsList = toCamelCase(statsList);

  res.status(200).json(statsList);
}
