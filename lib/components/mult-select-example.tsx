import { useState } from "react";
import { MultiSelect } from "./multi-select";

const frameworksList = [
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "ember", label: "Ember" },
];

function MultiSelectExample() {
  const [selectedFrameworks, setSelectedFrameworks] = useState([
    { value: "react", label: "React" },
    { value: "angular", label: "Angular" },
  ]);

  interface Class {
    id: string;
    section_name: string;
  }

  return (
    <MultiSelect
      options={frameworksList}
      onValueChange={setSelectedFrameworks}
      defaultValue={selectedFrameworks}
      placeholder="Select frameworks"
      variant="inverted"
      maxCount={3}
      useServerSideSearch
      fetchOptions={async () => {
        const response = await fetch(
          "https://tcn.staging-ultimostudios.com/api//my_classes/autocomplete?q=4",
          {
            headers: {
              authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTkyMDM5MTAsIm5iZiI6MTcxOTIwMzkxMCwianRpIjoiYmMwNGU5ZDEtZWU3OS00ZTMxLTlhMmItMzI3MDk0NzQ5ODBmIiwiY3NyZiI6Ijc3NTc1NjM2LTE1YWMtNGNhZS05ZmU4LWUzMTBhMjIzNDQwMyIsImV4cCI6MTcxOTM3NjcxMCwiYXV0aF91c2VyX2lkIjoiZjczZjU4NTktODJiYy00OWI3LWI0ZDMtY2I1NTYzN2ZkNjU1IiwiZW1haWwiOiJteWFjNHRlc3RpbmcrU2VwMjdhZG1pbkBnbWFpbC5jb20iLCJ0b2tlbl9zdWZmaXgiOiI0NzI2MGYxZS1hN2RlLTRlMzUtYWE2Yi01N2FmYWM3ZjMxMDMiLCJpZGVudGl0eSI6eyJhY2NvdW50X2lkIjo2NTcyLCJyb2xlcyI6W119LCJ0eXBlIjoiYWNjZXNzIiwiZnJlc2giOnRydWUsImxhc3RfcGFzc3dvcmRfc2V0X2RhdGVfaXNvIjoiMjAyMy0wOS0yN1QwNzowMDowOS45MTkxNzcifQ.g8D5LmvKGI1VEXhikDwBskwYkEbtidl_E9o29lg_uR0",
            },
          },
        );
        const results = await response.json();
        return results.grade_sections.map((cls: Class) => {
          return {
            value: cls.id,
            label: cls.section_name,
          };
        });
      }}
    />
  );
}

export default MultiSelectExample;
