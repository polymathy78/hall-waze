/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      name
      grade
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        grade
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTeacher = /* GraphQL */ `
  query GetTeacher($id: ID!) {
    getTeacher(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTeachers = /* GraphQL */ `
  query ListTeachers(
    $filter: ModelTeacherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeachers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSchool = /* GraphQL */ `
  query GetSchool($id: ID!) {
    getSchool(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSchools = /* GraphQL */ `
  query ListSchools(
    $filter: ModelSchoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDestination = /* GraphQL */ `
  query GetDestination($id: ID!) {
    getDestination(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDestinations = /* GraphQL */ `
  query ListDestinations(
    $filter: ModelDestinationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDestinations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStudentRecord = /* GraphQL */ `
  query GetStudentRecord($id: ID!) {
    getStudentRecord(id: $id) {
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
export const listStudentRecords = /* GraphQL */ `
  query ListStudentRecords(
    $filter: ModelStudentRecordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
