const jobs = [
  'Frontend Engineer',
  'Backend Engineer',
  'QA Engineer',
  'Product Manger',
  'CEO',
  'CTO'
];

const contributions = [454545, 525989, 9893565, 5465464, 646464, 636666];

const lists: any = {
  job: jobs,
  contribution: contributions,
}



export const random = (type: string): string | number => {
  const randomItem = Math.floor(Math.random() * lists[type].length)
  return lists[type][randomItem]
}

export const formatContact = (e: any) => {
  const firstName = e.target.elements['firstName'].value;
  const lastName = e.target.elements['lastName'].value;
  const email = e.target.elements['email'].value;
  const gender: any = Array.from(e.target.elements).find(
    (element: any) => element.type === 'radio' && element.checked
  );
  const department = e.target.elements['department'].value;
  const contribution = e.target.elements['contribution'].value;
  const active: any = Array.from(e.target.elements).find(
    (element: any) => element.type === 'checkbox'
  );
  const contact = {
    name: `${firstName} ${lastName}`,
    job: 'zion resident',
    email,
    gender: gender.value,
    contribution,
    active: active.checked,
    department
  };
  return contact
}