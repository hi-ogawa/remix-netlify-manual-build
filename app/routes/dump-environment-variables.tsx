import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/server-runtime";
import * as React from "react";

export const loader: LoaderFunction = async () => {
  return JSON.stringify(process.env, null, 2);
};

export default function Home() {
  const data = useLoaderData();
  return (
    <div>
      <div>Dump Environment Variables</div>
      <code style={{ whiteSpace: "pre" }}>{data}</code>
    </div>
  );
}
