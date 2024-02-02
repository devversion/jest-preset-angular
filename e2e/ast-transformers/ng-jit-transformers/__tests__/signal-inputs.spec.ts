import { Component, input } from '@angular/core';
import { TestBed } from '@angular/core/testing';

test('signal inputs should work', () => {
  @Component({
    selector: 'my-dir',
    template: `{{ firstName() }}`,
    standalone: true,
  })
  class TestDir {
    firstName = input.required<string>();
  }

  @Component({
    standalone: true,
    imports: [TestDir],
    template: `<my-dir [firstName]="name" />`,
  })
  class TestCmp {
    name = 'John';
  }

  const fixture = TestBed.createComponent(TestCmp);
  fixture.detectChanges();

  expect(fixture.nativeElement.textContent).toBe('John');

  fixture.componentInstance.name = 'Jest';
  fixture.detectChanges();

  expect(fixture.nativeElement.textContent).toBe('Jest');
});
