function withLoading(WrappedComponent: React.ComponentType) {
	return function ComponentWithLoading(props: object) {
		return (
			<WrappedComponent {...props} />
		)
	}
}

export default withLoading