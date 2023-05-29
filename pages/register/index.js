'use client';
import { useState } from 'react'
import Head from "next/head.js";
import Layout from '../../components/layout.js'
import { formFloorOptions, formRiceOptions } from '@/utils/const.js';
import FormComponent from '@/components/form.js';

export default function Register({}) {
  return (
    <Layout>
       <FormComponent />
    </Layout>
  );
}
