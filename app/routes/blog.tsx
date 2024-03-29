import { Outlet } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import Layout from "~/app/components/Layout";
import ErrorMessage from "~/app/components/ErrorMessage";

export default function Blog() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export const meta: MetaFunction = () => {
  return {
    title: "Blog",
  };
};

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Layout>
      <ErrorMessage error={error} />
    </Layout>
  );
}
