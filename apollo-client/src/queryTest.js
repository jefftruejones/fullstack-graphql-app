import { useQuery } from "@apollo/client";

export default function QueryTest({customers}){
    const { loading, error, data } = useQuery(customers);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

       let names = data.customers.map((customer)=> (<p>customer.name</p>));

      return <div>{names}</div>;
};