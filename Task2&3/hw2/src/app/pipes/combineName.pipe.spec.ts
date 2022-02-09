import { CombineName } from "./combineName.pipe";

describe('TitleCasePipe', () => {
    // This pipe is a pure, stateless function so no need for BeforeEach
    const pipe = new CombineName();
  
    it('full name', () => {
      expect(pipe.transform(["vaibhav","gupta"])).toBe('vaibhav gupta');
    });
  });