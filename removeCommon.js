let patients = [
    { id: '84ded0b1-68a5-41e2-af4e-bce8d5ce3470', AptNum: 62246 },
    { id: '1150acfe-9b49-412b-b5aa-fc4f489b956f', AptNum: 62251 },
    { id: '84ded0b1-68a5-41e2-af4e-bce8d5ce3474' },
  ];
  
  let ignorePatients = [
    { id: '84ded0b1-68a5-41e2-af4e-bce8d5ce3470' },
    { id: '84ded0b1-68a5-41e2-af4e-bce8d5ce3471' },
    { id: '84ded0b1-68a5-41e2-af4e-bce8d5ce3472' },
    { id: '1150acfe-9b49-412b-b5aa-fc4f489b956f' }
  ];
  
  function getUncommonPatients(patients, ignorePatients) {
    // Convert the ignorePatients array into a Set for efficient lookup
    const ignoreSet = new Set(ignorePatients.map(patient => patient.id));
    
    // Filter out the patients that have id not present in the ignoreSet
    const uncommonPatients = patients.filter(patient => !ignoreSet.has(patient.id));
    
    return uncommonPatients;
  }
  
  const uncommonPatients = getUncommonPatients(patients, ignorePatients);
  console.log(uncommonPatients);
  