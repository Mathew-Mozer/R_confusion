import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Dishdetail from './DishdetailComponent'
import About from './AboutComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment,postFeedback, fetchDishes, fetchComments,fetchPromos, fetchLeaders } from '../redux/ActionCreators'
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }   
}

const mapDispatchToProps = (dispatch) => ({
  postComment: (DishId, rating, author, comment) => dispatch(postComment(DishId, rating, author, comment)),
  postFeedback: (firstname, lastname, telnum, email,agree,contactType,message) => dispatch(postFeedback(firstname, lastname, telnum, email,agree,contactType,message)),
  fetchDishes: () => {dispatch(fetchDishes())},
  fetchPromos: () => {dispatch(fetchPromos())},
  fetchComments: () => {dispatch(fetchComments())},
  fetchLeaders: () => {dispatch(fetchLeaders())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
})

class Main extends Component {

  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

  render() {
      const HomePage = () => {
          return(
              <Home 
              dish={this.props.dishes.dishes.filter((dish)=>dish.featured)[0]} 
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.promotions.filter((promotion) => promotion.featured)[0]}
              promosLoading={this.props.promotions.isLoading}
              promosErrMess={this.props.promotions.errMess}
              leader={this.props.leaders.leaders.filter((leader)=> leader.featured)[0]}
              />
          )
      }

      const DishWithId = ({match}) =>{
        return(
          <Dishdetail dish={this.props.dishes.dishes.filter((dish) => dish.id===parseInt(match.params.dishId,10))[0]}
            isLoading={this.props.dishes.isLoading}
            ErrMess={this.props.dishes.errMess} 
            comments={this.props.comments.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}
            commentsErrMess={this.props.comments.errMess} 
            postComment={this.props.postComment}
          />
        );
      }

    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
                <Route path="/home" component={HomePage}/>
                <Route exact path="/aboutus" component={()=> <About leaders={this.props.leaders}/>}/>
                <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes}/>}/>
                <Route path="/menu/:dishId" component={DishWithId}/>
                <Route exact path="/contactus" render={() => <Contact postFeedback={this.props.postFeedback} resetFeedbackForm={this.props.resetFeedbackForm}/>}/>            
                <Redirect to="/home" />
            </Switch>
            </CSSTransition>
          </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
