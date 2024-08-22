/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
      id
      name
      grade
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
      id
      name
      grade
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
      id
      name
      grade
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTeacher = /* GraphQL */ `
  mutation CreateTeacher(
    $input: CreateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    createTeacher(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTeacher = /* GraphQL */ `
  mutation UpdateTeacher(
    $input: UpdateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    updateTeacher(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTeacher = /* GraphQL */ `
  mutation DeleteTeacher(
    $input: DeleteTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    deleteTeacher(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createSchool = /* GraphQL */ `
  mutation CreateSchool(
    $input: CreateSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    createSchool(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSchool = /* GraphQL */ `
  mutation UpdateSchool(
    $input: UpdateSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    updateSchool(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSchool = /* GraphQL */ `
  mutation DeleteSchool(
    $input: DeleteSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    deleteSchool(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createDestination = /* GraphQL */ `
  mutation CreateDestination(
    $input: CreateDestinationInput!
    $condition: ModelDestinationConditionInput
  ) {
    createDestination(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDestination = /* GraphQL */ `
  mutation UpdateDestination(
    $input: UpdateDestinationInput!
    $condition: ModelDestinationConditionInput
  ) {
    updateDestination(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDestination = /* GraphQL */ `
  mutation DeleteDestination(
    $input: DeleteDestinationInput!
    $condition: ModelDestinationConditionInput
  ) {
    deleteDestination(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createStudentRecord = /* GraphQL */ `
  mutation CreateStudentRecord(
    $input: CreateStudentRecordInput!
    $condition: ModelStudentRecordConditionInput
  ) {
    createStudentRecord(input: $input, condition: $condition) {
      id
      StudentID
      Name
      Destination
      DepartureTime
      ConvertedDepartureTime
      ReturnTime
      ConvertedReturnTime
      SchoolID
      SchoolName
      TeacherID
      TeacherName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateStudentRecord = /* GraphQL */ `
  mutation UpdateStudentRecord(
    $input: UpdateStudentRecordInput!
    $condition: ModelStudentRecordConditionInput
  ) {
    updateStudentRecord(input: $input, condition: $condition) {
      id
      StudentID
      Name
      Destination
      DepartureTime
      ConvertedDepartureTime
      ReturnTime
      ConvertedReturnTime
      SchoolID
      SchoolName
      TeacherID
      TeacherName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteStudentRecord = /* GraphQL */ `
  mutation DeleteStudentRecord(
    $input: DeleteStudentRecordInput!
    $condition: ModelStudentRecordConditionInput
  ) {
    deleteStudentRecord(input: $input, condition: $condition) {
      id
      StudentID
      Name
      Destination
      DepartureTime
      ConvertedDepartureTime
      ReturnTime
      ConvertedReturnTime
      SchoolID
      SchoolName
      TeacherID
      TeacherName
      createdAt
      updatedAt
      __typename
    }
  }
`;
