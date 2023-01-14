const { averageExams } = require('../gradeCalculations');
 

//method untuk testing dapat dilihat disini https://jestjs.io/docs/using-matchers
//untuk run testing dengan cata npm run test
// test('it should return exact average', () => {
//     const listValueOfExams = [80, 100, 100, 80];
//     expect(averageExams(listValueOfExams)).toEqual(90);
// })

// test('it should handle non-number ', () => {
//     const listValueOfExams = [80, 'a', '100', 80];
//     expect(() => averageExams(listValueOfExams)).toThrow();
// })


//integration testing dapat dijalankan bersamaan dengan unit test sehingga bisa ditulis seperti berikut
//untuk melihat laporan testing bisa dengan cara npm runtest -- coverage
//terdapat folder baru bernama coverage: didalamnya terdapat index.html untuk laporan dalam satu proyek dan fungsi fungsiDiTest.js.html berisi laporan per kode pengujian
describe('grade calculations', () => {
    test('it should return exact average', () => {
        const listValueOfExams = [80, 100, 100, 80];
        expect(averageExams(listValueOfExams)).toEqual(90);
    });
 
    /**
     * Integration testing
     */
    test('it should return exam passed status', () => {
        const listValueOfExams = [80, 100, 100, 80];
        expect(isStudentPassExam(listValueOfExams, 'Budi')).toEqual(true);
    })
 
 
    test('it should return exam failed status', () => {
        const listValueOfExams = [50, 40, 70, 80];
        expect(isStudentPassExam(listValueOfExams, 'Budi')).toEqual(false);
    })
})