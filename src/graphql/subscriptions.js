/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onCreateStudent(filter: $filter) {
      id
      name
      grade
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onUpdateStudent(filter: $filter) {
      id
      name
      grade
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent($filter: ModelSubscriptionStudentFilterInput) {
    onDeleteStudent(filter: $filter) {
      id
      name
      grade
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTeacher = /* GraphQL */ `
  subscription OnCreateTeacher($filter: ModelSubscriptionTeacherFilterInput) {
    onCreateTeacher(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTeacher = /* GraphQL */ `
  subscription OnUpdateTeacher($filter: ModelSubscriptionTeacherFilterInput) {
    onUpdateTeacher(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTeacher = /* GraphQL */ `
  subscription OnDeleteTeacher($filter: ModelSubscriptionTeacherFilterInput) {
    onDeleteTeacher(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateSchool = /* GraphQL */ `
  subscription OnCreateSchool($filter: ModelSubscriptionSchoolFilterInput) {
    onCreateSchool(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSchool = /* GraphQL */ `
  subscription OnUpdateSchool($filter: ModelSubscriptionSchoolFilterInput) {
    onUpdateSchool(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSchool = /* GraphQL */ `
  subscription OnDeleteSchool($filter: ModelSubscriptionSchoolFilterInput) {
    onDeleteSchool(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateDestination = /* GraphQL */ `
  subscription OnCreateDestination(
    $filter: ModelSubscriptionDestinationFilterInput
  ) {
    onCreateDestination(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateDestination = /* GraphQL */ `
  subscription OnUpdateDestination(
    $filter: ModelSubscriptionDestinationFilterInput
  ) {
    onUpdateDestination(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteDestination = /* GraphQL */ `
  subscription OnDeleteDestination(
    $filter: ModelSubscriptionDestinationFilterInput
  ) {
    onDeleteDestination(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateStudentRecord = /* GraphQL */ `
  subscription OnCreateStudentRecord(
    $filter: ModelSubscriptionStudentRecordFilterInput
  ) {
    onCreateStudentRecord(filter: $filter) {
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
export const onUpdateStudentRecord = /* GraphQL */ `
  subscription OnUpdateStudentRecord(
    $filter: ModelSubscriptionStudentRecordFilterInput
  ) {
    onUpdateStudentRecord(filter: $filter) {
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
export const onDeleteStudentRecord = /* GraphQL */ `
  subscription OnDeleteStudentRecord(
    $filter: ModelSubscriptionStudentRecordFilterInput
  ) {
    onDeleteStudentRecord(filter: $filter) {
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
