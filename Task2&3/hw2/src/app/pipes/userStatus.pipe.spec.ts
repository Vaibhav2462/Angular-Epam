import { UserStatus } from "./userStatus.pipe";

describe('TitleCasePipe', () => {
    // This pipe is a pure, stateless function so no need for BeforeEach
    const pipe = new UserStatus();
  
    it('transforms "abc" to "Abc"', () => {
      expect(pipe.transform(true)).toBe("DELETED");
    });
  });