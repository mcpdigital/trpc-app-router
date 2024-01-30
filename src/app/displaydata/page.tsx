// pages/DisplayData.tsx

import { GetServerSideProps } from "next";
import prisma from "@/server/db/prisma";
import DataTable from "@/components/datatable";

export const Show = async () => {
  const data = await prisma.userData.findMany();

  return {
    props: { data },
  };
};

export default function DisplayData({ data }: { data: Array<object> }) {
  return (
    <div>
      <DataTable data={data} />
    </div>
  );
}
