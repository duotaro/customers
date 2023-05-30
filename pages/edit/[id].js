'use client';
import { useRouter } from 'next/router';
import Layout from '../../components/layout.js'
import FormComponent from '@/components/parts/form.js';

export default function Edit(props) {
  console.log(props)
  const router = useRouter();
  console.log(router)

  let id = router.query.id
  console.log(id)
  return (
    <Layout>
      <FormComponent id={id}/>
    </Layout>
  );
}
