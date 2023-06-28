function process_argv() {
  const { argv } = process;
  const result = studentPortal(argv[2]);

  return result;
}

function studentPortal(studentId) {
  const studentList = [
    {
      id: "2010310164",
      name: "Rakanda Pangeran Nasution",
      gpa: 2.65,
      status: false,
    },
    {
      id: "2011310021",
      name: "Yosef Noferianus Gea",
      gpa: 3.1,
      status: true,
    },
    {
      id: "2014310100",
      name: "Angelia",
      gpa: 1.25,
      status: true,
    },
    {
      id: "2011320090",
      name: "Dito Bagus Prasetio",
      gpa: 2.75,
      status: true,
    },
    {
      id: "2011320100",
      name: "Hikman Nurahman",
      gpa: 2.45,
      status: true,
    },
    {
      id: "2010320181",
      name: "Edizon",
      gpa: 1.95,
      status: true,
    },
    {
      id: "2012320055",
      name: "Marrisa Stella",
      gpa: 3.5,
      status: false,
    },
    {
      id: "2012330080",
      name: "Dea Christy Keliat",
      gpa: 3,
      status: true,
    },
    {
      id: "2013330049",
      name: "Sekarini Mahyaswari",
      gpa: 3.5,
      status: true,
    },
    {
      id: "2012330004",
      name: "Yerica",
      gpa: 3.15,
      status: false,
    },
  ];

  // const student = studentList.find((s) => s.id === studentId);
  // if (studentList.status === false) {
  //   return `Mahasiswa dengan id ${studentList.id} sudah tidak aktif`;
  // } else if (studentList.status === true) {
  //   return {
  //     id: sttudentList.id,
  //     name: studentList.name,
  //     gpa: studentList.gpa,
  //     credits: getSubjects(credits(credit)),
  //     subjects: getSubjects(credits),
  //   };
  // } else {
  //   return "Mahasiswa tidak terdaftar";
  // }
  const student = studentList.find((s) => s.id === studentId);
  if (!student) {
    return "Mahasiswa tidak terdaftar";
  }

  if (!student.status) {
    return `Mahasiswa dengan id ${student.id} sudah tidak aktif`;
  }
  const credits = getCredits(student.gpa);
  return {
    id: student.id,
    name: student.name,
    gpa: student.gpa,
    credits,
    subjects: getSubjects(credits),
  };

  // return {}; // TODO: replace this
}

function getCredits(gpa) {
  let result = 0;
  if (gpa > 2.99) {
    result = 24;
  } else if (gpa >= 2.5 && gpa <= 2.99) {
    result = 21;
  } else if (gpa >= 2 && gpa <= 2.49) {
    result = 18;
  } else if (gpa >= 1.5 && gpa <= 1.99) {
    result = 15;
  } else if (gpa >= 0 && gpa <= 1.49) {
    result = 12;
  }
  return result; // TODO: replace this
}

function getSubjects(credits) {
  const subjectsList = [
    {
      subjectName: "Ilmu Politik",
      credit: 3,
      status: "wajib",
    },
    {
      subjectName: "Ilmu Ekonomi",
      credit: 3,
      status: "wajib",
    },
    {
      subjectName: "Estetika",
      credit: 1,
      status: "pilihan",
    },
    {
      subjectName: "Kepemimpinan",
      credit: 3,
      status: "wajib",
    },
    {
      subjectName: "Etika",
      credit: 2,
      status: "pilihan",
    },
    {
      subjectName: "Sosiologi",
      credit: 3,
      status: "wajib",
    },
    {
      subjectName: "Teori Pengambil keputusan",
      credit: 3,
      status: "wajib",
    },
    {
      subjectName: "Statistika",
      credit: 3,
      status: "wajib",
    },
    {
      subjectName: "Aplikasi IT",
      credit: 3,
      status: "pilihan",
    },
  ];

  // subjectsList.forEach((status) => status === "wajib");
  // return subjectsList; // TODO: replace this
  let tempCredits = 0;

  const wajibSubjects = subjectsList.filter((sbj) => sbj.status === "wajib");
  const pilihanSubjects = subjectsList
    .filter((sbj) => sbj.status === "pilihan")
    .sort((a, b) => b.credit - a.credit);
  const sortedSubjects = [...wajibSubjects, ...pilihanSubjects];

  const subjects = sortedSubjects.filter((subject) => {
    if (tempCredits < credits) {
      if (subject.status === "wajib") {
        tempCredits += subject.credit;
        return subject;
      }
      if (tempCredits + subject.credit <= credits) {
        tempCredits += subject.credit;
        return subject;
      }
    }
  });

  return subjects; // TODO: replace this
}
// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
  console.log(process_argv());
}

module.exports = {
  studentPortal,
  getSubjects,
  getCredits,
};
