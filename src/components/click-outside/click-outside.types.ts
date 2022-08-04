export type ClickOutsideProps = {
  /** Content of the Click outside Component */
  children: React.ReactNode;
  /** Outside of component click callback */
  callback: Function;
  /** Id of the component */
  id: string;
};
