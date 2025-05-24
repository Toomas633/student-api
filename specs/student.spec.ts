const { API_URL } = process.env

describe('Student endpoint', () => {
  it('Should be able to create an student', async () => {
    console.log(API_URL)
    const response = await fetch(`${API_URL}/student`, {
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        firstName: 'Lorrie',
        lastName: 'Urquilla',
        email: 'slycriselda@mockneat.com',
        studentNumber: '111AAA',
      }),
    })

    expect(response.ok).toBe(true)
    expect(response.status).toBe(200)
  })

  it('Should be able to add multiple students', async () => {
    const responses = await Promise.all([
      fetch(`${API_URL}/student`, {
        headers: {
          'content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          firstName: 'Tabitha',
          lastName: 'Copsey',
          email: 'headsoutdanced@mockneat.com',
          studentNumber: '112AAA',
        }),
      }),
      fetch(`${API_URL}/student`, {
        headers: {
          'content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          firstName: 'Laurine',
          lastName: 'Patrylak',
          email: 'headsoutdanced@mockneat.com',
          studentNumber: '113AAA',
        }),
      }),
    ])

    expect(responses.map((response) => response.ok)).toEqual([true, true])
    expect(responses.map((response) => response.status)).toEqual([200, 200])
  })

  it('Should be able to update student parameters', async () => {
    const response = await fetch(`${API_URL}/student/113AAA`, {
      headers: {
        'content-type': 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify({
        lastName: 'Peiper',
      }),
    })

    expect(response.ok).toBe(true)
    expect(response.status).toBe(200)
  })

  it('Should be able to fetch students', async () => {
    const response = await fetch(`${API_URL}/student`)

    expect(response.ok).toBe(true)
    expect(response.status).toBe(200)
    const students: any = await response.json()
    expect(students.length).toBe(3)
  })

  it('Should be able to fetch a spesific student', async () => {
    const response = await fetch(`${API_URL}/student/113AAA`)

    expect(response.ok).toBe(true)
    expect(response.status).toBe(200)
    const student: any = await response.json()
    expect(student.firstName).toBe('Laurine')
    expect(student.lastName).toBe('Peiper')
    expect(student.email).toBe('headsoutdanced@mockneat.com')
    expect(student.studentNumber).toBe('113AAA')
  })

  it('Should be able to delete a student', async () => {
    const deleteResponse = await fetch(`${API_URL}/student/112AAA`, {
      method: 'DELETE',
    })
    expect(deleteResponse.ok).toBe(true)
    expect(deleteResponse.status).toBe(200)

    const getResponse = await fetch(`${API_URL}/student`)
    const students: any = await getResponse.json()
    expect(students.length).toBe(2)
  })
})
