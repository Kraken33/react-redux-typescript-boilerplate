export interface IMapStateToProps {}

export interface IMapDispatchToProps {}

export interface IProps extends IMapStateToProps, IMapDispatchToProps {
  children: any;
}
