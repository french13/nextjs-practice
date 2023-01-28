import  Axios  from "axios";
import { useRouter } from "next/router";
import { Button, Form } from "semantic-ui-react";

export default function Login() {
    const router = useRouter()

    function login(){
        Axios.post('/api/login').then((res)=>{
           if(res.status===200){
            router.push('/admin')
           }
        })
    }





  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </Form.Field>
      
        <Button type="submit" onClick={login}>Submit</Button>
      </Form>
    </div>
  );
}
