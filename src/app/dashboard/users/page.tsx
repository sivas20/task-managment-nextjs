"use client";
import { useState } from "react";

interface UsersSchema{
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };

}

export default function user(){
   
    const [user,setUsers] = useState<UsersSchema[]>([]);
    const [loading, setloading] = useState<boolean>(true);
    
    async function fetchData() {
        try{
            const d = await fetch("https://jsonplaceholder.typicode.com/users");
            const data:UsersSchema[] = await d.json();
            setUsers(data);
        }
        catch(e:any){
            console.log(e.message);
        }
        finally{
            setloading(false);
        }
    }
    
    fetchData();

    return(
        <>
        <div className="flex flex-col items-center justify-center">
            <h1>{loading ? "loading..." : ""}</h1>
            {user.map((p)=>(
                <div key={p.id} className="m-2 p-2 px-4 bg-amber-200 w-fit rounded-2xl">
                    <h1>{p.name}</h1>
                    <p>{p.email}</p>

                </div>
            ))} 
        </div>
        </>
    );
}