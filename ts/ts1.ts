let demo1 = (name: string): string => {
    return `hello ${name}`
}

let arr: [number, string] = [1, "1"];
arr.push("2");
arr.push(2);

function fn1(name: string): string {
    return name;
}

let fn2 = (name: string): string => {
    return name;
}

let fn3: (name: string) => string = (name: string) => {
    return name
}

interface Fn {
    (name: string): string;
}

let fn4: Fn = function(name: string) {
    return name;
}

let fn5: Fn = (name: string) => {
    return name;
}

/**
 * 类应用接口 implements
 * 可以应用多个接口，用逗号隔开就行
 */

/**
 * 接口继承接口 extends
 * &
 * 联合类型
 */

/**
 * 抽象类 abstract，
 * 抽象方法，并不写方法的具体实现，由继承的子类去实现
 */

// 枚举 enum，常量值枚举

/**
 * 泛型
 * 约束泛型：泛型继承接口，extends
 */

/**
 * 类型别名 type
 */

/**
 * declare
 * 使用第三方库的时候，声明文件： .d.ts 声明文件
 */

/**
 * 内置类型：全局的变量，Math Date  document
 */