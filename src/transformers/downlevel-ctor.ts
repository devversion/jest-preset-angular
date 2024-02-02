import { angularJitApplicationTransform } from '@angular/compiler-cli';
import type ts from 'typescript';

export const constructorParametersDownlevelTransform = (program: ts.Program): ts.TransformerFactory<ts.SourceFile> => {
  return angularJitApplicationTransform(program);
};
