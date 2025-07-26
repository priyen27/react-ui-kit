import React from "react";

import { Filters } from "./Filters";
import { useForm } from "react-hook-form";
import { Form } from "./form";

const FilterForm = ({ defaultValues = {} }: { defaultValues?: object }) => {
  const form = useForm({
    defaultValues,
  });
  const data = form.watch();

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  const templateFields = [
    {
      key: "contentPartners",
      id: "providers",
      label: "Content Partners",
      type: "checkbox",
      showSearch: true,
      showClearFilters: true,
      children: [
        {
          key: "provider1",
          id: "provider1",
          label: "Provider 1",
        },
        {
          key: "provider2",
          id: "provider2",
          label: "Provider 2",
          children: [
            {
              key: "provider2-1",
              id: "provider2-1",
              label: "Provider 2-1",
            },
            {
              key: "provider2-2",
              id: "provider2-2",
              label: "Provider 2-2",
            },
            {
              key: "provider2-3",
              id: "provider2-3",
              label: "Provider 2-3",
            },
            {
              key: "provider2-4",
              id: "provider2-4",
              label: "Provider 2-4",
            },
            {
              key: "provider2-5",
              id: "provider2-5",
              label: "Provider 2-5",
            },
            {
              key: "provider2-6",
              id: "provider2-6",
              label: "Provider 2-6",
            },
            {
              key: "provider2-7",
              id: "provider2-7",
              label: "Provider 2-7",
            },
            {
              key: "provider2-8",
              id: "provider2-8",
              label: "Provider 2-8",
            },
          ],
        },
      ],
    },
    {
      key: "customFields",
      id: "customFields",
      label: "Custom Fields",
      type: "checkbox",
      showSearch: true,
      showClearFilters: true,
      children: [
        {
          key: "provider2",
          id: "provider2",
          label: "Provider 2",
          children: [
            {
              key: "provider2-1",
              id: "provider2-1",
              label: "Provider 2-1",
            },
            {
              key: "provider2-2",
              id: "provider2-2",
              label: "Provider 2-2",
            },
          ],
        },
      ],
    },
  ];

  return (
    <Form {...form}>
      <form>
        <Filters
          templateFields={templateFields}
          form={form}
          parentFocusKey="customFields"
          childFocusKey="provider2"
        />
      </form>
    </Form>
  );
};

export default FilterForm;
