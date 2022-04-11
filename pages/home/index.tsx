import { PrismaClient, User } from "@prisma/client";
import { Table } from "antd";
import { GetStaticProps } from "next";
const { Column } = Table;
export const getStaticProps: GetStaticProps = async (context) => {
  const client = new PrismaClient();
  const accounts = await client.user.findMany();
  return {
    props: {
      data: accounts,
    },
  };
};
const Home: React.FC<{ data: User[] }> = ({ data }) => {
  return (
    <Table dataSource={data} rowKey={(row) => row.id}>
      <Column title="Id" dataIndex="id" key="id" />
      <Column title="Name" dataIndex="name" key="name" />
    </Table>
  );
};

export default Home;
