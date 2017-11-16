// @flow

declare class Object {
	static assign: <T>(o1: $Shape<T>, o2: $Shape<T>) => T;
}
